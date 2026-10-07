/**
 * messageStore.js
 * Stockage local des messages de contact via localStorage.
 * Fonctionne 100% sans serveur ni abonnement.
 */

const STORAGE_KEY = 'stivmab-messages';

function getAll() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

function save(messages) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
}

export const messageStore = {
  list() {
    return getAll().sort((a, b) => new Date(b.created_date) - new Date(a.created_date));
  },

  create(data) {
    const messages = getAll();
    const newMsg = {
      ...data,
      id: Date.now().toString(),
      created_date: new Date().toISOString(),
      status: 'nouveau',
    };
    messages.push(newMsg);
    save(messages);
    return newMsg;
  },

  update(id, data) {
    const messages = getAll().map(m => m.id === id ? { ...m, ...data } : m);
    save(messages);
  },

  delete(id) {
    const messages = getAll().filter(m => m.id !== id);
    save(messages);
  },
};