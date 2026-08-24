/**
 * SpaceFrogs Genesis — 3D Model Archive registry.
 *
 * Any .glb dropped into `src/assets/models/` is auto-detected at build time and
 * connected to a slot on the landing page. Slots without a model keep the
 * "NO SIGNAL / AWAITING UPLOAD" HUD state.
 */

export type SlotId =
  | "hero"
  | "wit"
  | "veil"
  | "skip"
  | "bulwark"
  | "patch"
  | "luma"
  | "volt"
  | "kelp"
  | "echo";

export const SQUAD_SLOTS: SlotId[] = [
  "wit",
  "veil",
  "skip",
  "bulwark",
  "patch",
  "luma",
  "volt",
  "kelp",
  "echo",
];
const SLOT_ORDER: SlotId[] = ["hero", ...SQUAD_SLOTS];

const MANUAL_ASSIGNMENTS: Record<SlotId, string | null> = {
  hero: null,
  wit: null,
  veil: null,
  skip: null,
  bulwark: null,
  patch: null,
  luma: null,
  volt: null,
  kelp: null,
  echo: null,
};

const PUBLIC_ASSIGNMENTS: Partial<Record<SlotId, string>> = {
  wit: "wit.glb",
  veil: "veil.glb",
  skip: "skip.glb",
  patch: "patch.glb",
  bulwark: "bulwark_deluxe_hero_edition.glb",
  volt: "volt.glb",
  kelp: "kelp.glb",
  echo: "echo.glb",
};

export function publicAssetUrl(relPath: string): string {
  const base = import.meta.env.BASE_URL ?? "/";
  return `${base}${relPath.replace(/^\//, "")}`;
}

function publicModelUrl(fileName: string): string {
  return publicAssetUrl(`assets/models/${fileName}`);
}

export const FEATURED_MODELS = {
  base: publicModelUrl("auranova.glb"),
  veil: publicModelUrl("veil.glb"),
} as const;

export const AURA_NOVA_MODELS = {
  explodedPrototype: publicAssetUrl("models/aura-nova/aura-nova-exploded.glb"),
} as const;

export const IMAGE_ASSETS = {
  lux: publicAssetUrl("assets/images/lux.jpg"),
  world: publicAssetUrl("swamp-bg.png"),
  bioforgeStudy: publicAssetUrl("assets/images/bioforge-design-study.webp"),
  bioforgeStudy768: publicAssetUrl("assets/images/bioforge-design-study-768.webp"),
} as const;

export const ENEMY_MODELS = {
  glimmerhex: publicModelUrl("slime_toad_glimmerhex.glb"),
  mirevolt: publicModelUrl("slime_toad_mirevolt.glb"),
  hexmire: publicModelUrl("slime_toad_hexmire.glb"),
  voidgrasp: publicModelUrl("slime_toad_voidgrasp.glb"),
  shivshade: publicModelUrl("slime_toad_shivshade.glb"),
  muckmaw: publicModelUrl("slime_toad_muckmaw.glb"),
} as const;

export const CANNONFUNGIE_MODELS = {
  marksman: publicModelUrl("cannonfungie_01_marksman.glb"),
  riflegrunt: publicModelUrl("cannonfungie_02_riflegrunt.glb"),
  skirmisher: publicModelUrl("cannonfungie_03_skirmisher.glb"),
} as const;

export const CANNONFUNGIE_CANDIDATE_MODELS = {
  heavygunner: publicModelUrl("Cannonfungie_04_blaster.glb"),
} as const;

export interface ResolvedSlot {
  url: string | null;
  provisional: boolean;
  uploadLabel: string | null;
  fileName: string | null;
}

interface DetectedFile {
  fileName: string;
  url: string;
}

function matchesSlot(fileName: string, key: SlotId): boolean {
  const base = fileName.toLowerCase().replace(/\.glb$/, "");
  const tokens = base.split(/[^a-z0-9]+/).filter(Boolean);
  if (tokens.includes(key)) return true;
  return new RegExp(`^${key}(\\d|$)`).test(base);
}

function detectFiles(): DetectedFile[] {
  const modules = import.meta.glob("../assets/models/*.glb", {
    eager: true,
    query: "?url",
    import: "default",
  }) as Record<string, string>;

  return Object.entries(modules)
    .map(([path, url]) => ({
      fileName: path.split("/").pop() ?? path,
      url,
    }))
    .sort((a, b) => a.fileName.localeCompare(b.fileName));
}

function emptySlots(): Record<SlotId, ResolvedSlot> {
  return SLOT_ORDER.reduce((acc, id) => {
    acc[id] = { url: null, provisional: false, uploadLabel: null, fileName: null };
    return acc;
  }, {} as Record<SlotId, ResolvedSlot>);
}

function resolveSlots(): Record<SlotId, ResolvedSlot> {
  const slots = emptySlots();
  const files = detectFiles();
  const used = new Set<string>();

  for (const [id, fileName] of Object.entries(PUBLIC_ASSIGNMENTS) as [SlotId, string][]) {
    slots[id] = {
      url: publicModelUrl(fileName),
      provisional: false,
      uploadLabel: null,
      fileName,
    };
  }

  for (const id of SLOT_ORDER) {
    const pinned = MANUAL_ASSIGNMENTS[id];
    if (!pinned) continue;
    const match = files.find((f) => f.fileName === pinned && !used.has(f.fileName));
    if (match) {
      slots[id] = { url: match.url, provisional: false, uploadLabel: null, fileName: match.fileName };
      used.add(match.fileName);
    }
  }

  for (const id of SLOT_ORDER) {
    if (slots[id].url) continue;
    const match = files.find((f) => !used.has(f.fileName) && matchesSlot(f.fileName, id));
    if (match) {
      slots[id] = { url: match.url, provisional: false, uploadLabel: null, fileName: match.fileName };
      used.add(match.fileName);
    }
  }

  const leftovers = files.filter((f) => !used.has(f.fileName));
  let uploadIndex = 1;
  for (const id of SLOT_ORDER) {
    if (slots[id].url) continue;
    const next = leftovers.shift();
    if (!next) break;
    slots[id] = {
      url: next.url,
      provisional: true,
      uploadLabel: `UPLOADED MODEL ${String(uploadIndex).padStart(2, "0")}`,
      fileName: next.fileName,
    };
    uploadIndex += 1;
    used.add(next.fileName);
  }

  return slots;
}

export type ModelKind =
  | "figure"
  | "figure-on-base"
  | "base-only"
  | "exploded-prototype"
  | "enemy"
  | "unverified"
  | "packaging";

export interface ModelAuditEntry {
  file: string;
  kind: ModelKind;
  note: string;
}

export const MODEL_AUDIT: ModelAuditEntry[] = [
  { file: "wit.glb", kind: "figure", note: "WIT hero sculpt" },
  { file: "skip.glb", kind: "figure", note: "SKIP hero sculpt" },
  { file: "patch.glb", kind: "figure", note: "PATCH hero sculpt" },
  { file: "bulwark_deluxe_hero_edition.glb", kind: "figure", note: "BULWARK deluxe display edition sculpt" },
  { file: "volt.glb", kind: "figure", note: "VOLT hero sculpt" },
  { file: "kelp.glb", kind: "figure", note: "KELP hero sculpt" },
  { file: "echo.glb", kind: "figure", note: "ECHO hero sculpt" },
  { file: "veil.glb", kind: "figure", note: "VEIL hero sculpt — file present; visual Golden Master approval remains separate" },
  // LUMA intentionally has no audit entry because no verified GLB exists in the supplied snapshot.
  { file: "slime_toad_glimmerhex.glb", kind: "enemy", note: "Slime Toad unit" },
  { file: "slime_toad_mirevolt.glb", kind: "enemy", note: "Slime Toad unit" },
  { file: "slime_toad_hexmire.glb", kind: "enemy", note: "Slime Toad unit" },
  { file: "slime_toad_voidgrasp.glb", kind: "enemy", note: "Slime Toad unit" },
  { file: "slime_toad_shivshade.glb", kind: "enemy", note: "Slime Toad unit" },
  { file: "slime_toad_muckmaw.glb", kind: "enemy", note: "Slime Toad unit" },
  { file: "cannonfungie_01_marksman.glb", kind: "enemy", note: "Cannonfungie roster unit" },
  { file: "cannonfungie_02_riflegrunt.glb", kind: "enemy", note: "Cannonfungie roster unit" },
  { file: "cannonfungie_03_skirmisher.glb", kind: "enemy", note: "Cannonfungie roster unit" },
  { file: "Cannonfungie_04_blaster.glb", kind: "enemy", note: "Cannonfungie development candidate" },
  { file: "aura-nova-exploded.glb", kind: "exploded-prototype", note: "Aura Nova Base exploded R&D prototype view — not final engineering or working electronics" },
  { file: "auranova.glb", kind: "unverified", note: "Aura Nova CONCEPT model — not verified as base-only hardware" },
  { file: "hero-alien-mage.glb", kind: "unverified", note: "src-detected upload — content not classified" },
];

export const MODEL_AUDIT_COUNTS = MODEL_AUDIT.reduce(
  (acc, m) => {
    acc[m.kind] += 1;
    return acc;
  },
  { "figure": 0, "figure-on-base": 0, "base-only": 0, "exploded-prototype": 0, "enemy": 0, "unverified": 0, "packaging": 0 } as Record<ModelKind, number>,
);

export const MODEL_SLOTS: Record<SlotId, ResolvedSlot> = resolveSlots();

export const DETECTED_MODEL_COUNT: number = Object.values(MODEL_SLOTS).filter((s) => s.url).length;
