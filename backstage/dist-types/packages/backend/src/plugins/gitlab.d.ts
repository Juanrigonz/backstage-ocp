import { PluginEnvironment } from '../types';
import { Router } from 'express-serve-static-core';
export default function createPlugin(env: PluginEnvironment): Promise<Router>;
