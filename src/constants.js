const CATEGORIES = Object.freeze({
  Images: ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp', '.ico'],
  Videos: ['.mp4', '.mkv', '.mov', '.avi', '.webm'],
  Audio: ['.mp3', '.wav', '.flac', '.aac', '.ogg'],
  Documents: ['.pdf', '.doc', '.docx', '.txt', '.rtf'],
  Spreadsheets: ['.xls', '.xlsx', '.csv'],
  Archives: ['.zip', '.rar', '.7z', '.tar', '.gz'],
  Programs: ['.exe', '.msi', '.bat', '.cmd']
});

const DEFAULT_CATEGORY = 'Others';
const IGNORE_NAMES = new Set(['desktop.ini', 'Thumbs.db']);

module.exports = { CATEGORIES, DEFAULT_CATEGORY, IGNORE_NAMES };
