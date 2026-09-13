#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
if [[ ! -d .venv ]]; then
  python3 -m venv .venv
  .venv/bin/pip install -r requirements.txt
  .venv/bin/playwright install chromium
fi
.venv/bin/python prepare_fonts.py
exec .venv/bin/uvicorn app.main:app --host 127.0.0.1 --port 8001 --reload
