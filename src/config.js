export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';
export const WHATSAPP_NUMBER = (import.meta.env.VITE_WHATSAPP_NUMBER || '').replace(/\D/g, '');
export const INSTAGRAM_URL = import.meta.env.VITE_INSTAGRAM_URL || 'https://www.instagram.com/mesangora/';
export const TIKTOK_URL = 'https://www.tiktok.com/@mesangora';
export const initialTikToks = [
  ['video','7339084490028895493'],['video','7704624191508630805'],['photo','7700502086538104085'],['video','7699410003702238484'],['video','7699177453431852309'],['video','7697217223160597812'],['video','7693465821418491156'],['photo','7692774032218918164'],['photo','7687537411831663892'],['video','7685688744690666772'],['photo','7682850606750387477'],['video','7681588051574852885'],['photo','7680528509424438548'],['photo','7678996072248773909'],['photo','7677523456669256981'],['photo','7677112629961280789'],['video','7675613748203097365'],['video','7675238999660842260'],['video','7674894498538786068'],['photo','7673433847073213716'],['photo','7672314180015312149'],['photo','7671938183126387988'],['photo','7649682677519387924'],['photo','7645247474973625621'],['photo','7643131726469811476'],['video','7638897676460756244']
].map(([type,id])=>({type,id,url:`https://www.tiktok.com/@mesangora/${type}/${id}`}));
