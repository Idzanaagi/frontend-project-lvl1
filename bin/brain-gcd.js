#!/usr/bin/env node
import getEngine from '../src/index.js';
import { rules, gcdGame } from '../src/games/brain-gcd.js';

getEngine(rules, gcdGame());
