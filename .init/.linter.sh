#!/bin/bash
cd /home/kavia/workspace/code-generation/modular-micro-frontend-dashboard-113379-113388/micro_frontend_dashboard
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

