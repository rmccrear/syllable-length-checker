#!/usr/bin/env sh
EN_DICT_SRC=../dictionary-sources/en
LC_ALL=C cat $EN_DICT_SRC/mhyph-utf-8.txt |  LC_ALL=C tr -d '\r' > $EN_DICT_SRC/mhyph-utf-8-n.txt
