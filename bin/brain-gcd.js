#!/usr/bin/env node
import getEngine from '../src/index.js';
import { rules, gcdGame } from '../src/brain-gcd.js';

console.log(getEngine(rules, gcdGame(3)));
