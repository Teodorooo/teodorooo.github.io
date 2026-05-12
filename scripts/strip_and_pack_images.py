"""Strip ALL metadata from farm/food source images, auto-rotate by EXIF, resize for web,
and write them under src/images/personal/{farm,food} with simple ascii filenames.

The output JPEGs are written WITHOUT any EXIF/IPTC/XMP segments so location data,
device info, and capture timestamps cannot be recovered.
"""

from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
SRC_BASE = ROOT / "src" / "images" / "Mr bean faces"
OUT_BASE = ROOT / "src" / "images" / "personal"

# (source-folder, output-folder, ordered output stems)
BATCHES = [
    (
        SRC_BASE / "farm",
        OUT_BASE / "farm",
        [
            # Listed in the order WhatsApp Image ... (1), (2)
            ("WhatsApp Image 2026-05-11 at 8.30.27 PM (1).jpeg", "farm-01.jpg"),
            ("WhatsApp Image 2026-05-11 at 8.30.27 PM (2).jpeg", "farm-02.jpg"),
        ],
    ),
    (
        SRC_BASE / "food",
        OUT_BASE / "food",
        [
            ("WhatsApp Image 2026-05-11 at 1.49.24 PM.jpeg",       "food-01.jpg"),
            ("WhatsApp Image 2026-05-11 at 8.24.13 PM.jpeg",        "food-02.jpg"),
            ("WhatsApp Image 2026-05-11 at 8.24.13 PM (2).jpeg",    "food-03.jpg"),
            ("WhatsApp Image 2026-05-11 at 8.24.13 PM (3).jpeg",    "food-04.jpg"),
            ("WhatsApp Image 2026-05-11 at 8.24.13 PM (4).jpeg",    "food-05.jpg"),
            ("WhatsApp Image 2026-05-11 at 8.24.13 PM (5).jpeg",    "food-06.jpg"),
            ("WhatsApp Image 2026-05-11 at 8.24.13 PM (6).jpeg",    "food-07.jpg"),
            ("WhatsApp Image 2026-05-11 at 8.24.13 PM (7).jpeg",    "food-08.jpg"),
            ("WhatsApp Image 2026-05-11 at 8.24.23 PM.jpeg",        "food-09.jpg"),
            ("WhatsApp Image 2026-05-11 at 8.30.27 PM.jpeg",        "food-10.jpg"),
        ],
    ),
]

MAX_DIM = 1600  # cap longest side – plenty for high-DPI web use
QUALITY = 82


def clean_image(src: Path, dst: Path) -> None:
    with Image.open(src) as im:
        # Apply EXIF orientation, then drop EXIF entirely.
        im = ImageOps.exif_transpose(im)
        if im.mode not in ("RGB", "L"):
            im = im.convert("RGB")

        w, h = im.size
        scale = min(1.0, MAX_DIM / max(w, h))
        if scale < 1.0:
            im = im.resize((int(w * scale), int(h * scale)), Image.LANCZOS)

        # Rebuild a clean image so no original metadata sneaks through.
        clean = Image.new(im.mode, im.size)
        clean.putdata(list(im.getdata()))

        dst.parent.mkdir(parents=True, exist_ok=True)
        clean.save(
            dst,
            format="JPEG",
            quality=QUALITY,
            optimize=True,
            progressive=True,
            exif=b"",  # explicitly no EXIF
            icc_profile=None,
        )


def main() -> None:
    for src_dir, dst_dir, items in BATCHES:
        for src_name, dst_name in items:
            src = src_dir / src_name
            dst = dst_dir / dst_name
            if not src.exists():
                print(f"SKIP missing: {src}")
                continue
            clean_image(src, dst)
            print(f"OK {src.name} -> {dst.relative_to(ROOT)}  ({dst.stat().st_size//1024} KB)")


if __name__ == "__main__":
    main()
