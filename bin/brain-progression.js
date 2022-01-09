#!/usr/bin/env node
import getEngine from '../src/index.js';
import { rules, progressionGame } from '../src/games/brain-progression.js';

getEngine(rules, progressionGame());
