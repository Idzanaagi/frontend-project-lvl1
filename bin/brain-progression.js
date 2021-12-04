#!/usr/bin/env node
import getEngine from '../src/index.js';
import { rules, progressionGame } from '../src/brain-progression.js';

console.log(getEngine(rules, progressionGame(3)));
