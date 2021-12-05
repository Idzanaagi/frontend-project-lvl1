#!/usr/bin/env node
import getEngine from '../src/index.js';
import { rules, calculatorGame } from '../src/games/brain-calc.js';

console.log(getEngine(rules, calculatorGame(3)));
