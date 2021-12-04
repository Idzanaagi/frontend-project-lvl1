#!/usr/bin/env node
import getEngine from '../src/index.js';
import { rules, primeGame } from '../src/brain-prime.js';

console.log(getEngine(rules, primeGame(3)));
