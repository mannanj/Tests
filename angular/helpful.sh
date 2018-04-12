#!/bin/bash
##############################################################################
# Node Proxy
##############################################################################
HTTP_LINE='proxy=http://gatekeeper-w.mitre.org:80/'
HTTPS_LINE='https-proxy=http://gatekeeper-w.mitre.org:80/'
FILE=~/.npmrc
grep -q -F "$HTTP_LINE" $FILE || echo "$HTTP_LINE" >> $FILE
grep -q -F "$HTTPS_LINE" $FILE || echo "$HTTPS_LINE" >> $FILE