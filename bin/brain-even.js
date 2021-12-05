#!/usr/bin/env node
import getEngine from '../src/index.js';
import { rules, isEvenGame } from '../src/games/brain-even.js';

console.log(getEngine(rules, isEvenGame(3)));
