/**
 * Contextual signal evaluation layer
 * Acts as a routing abstraction for event-driven systems
 */

export function routeSignal(signal) {
  if (!signal || typeof signal !== 'object') return null;

  return {
    type: signal.type || 'UNKNOWN',
    priority: signal.priority ?? 0,
  };
}
