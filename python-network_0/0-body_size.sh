#!/bin/bash
# Receiving content and displaying content length information
curl -s "$1" | wc -c
