#!/usr/bin/env node
import getEngine from '../src/index.js';
import { rules, evenGame } from '../src/games/brain-even.js';

getEngine(rules, evenGame());

// gg
