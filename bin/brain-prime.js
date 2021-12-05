#!/usr/bin/env node
import getEngine from '../src/index.js';
import { rules, primeGame } from '../src/games/brain-prime.js';

console.log(getEngine(rules, primeGame(3)));
