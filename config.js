// =====================================================================
// JHA Digital - deployment settings ("everything baked in")
//
// This file is loaded by index.html and qr-posters.html. Fill it in once, upload it next to
// them, and nobody has to set anything up on their own device.
//
// IMPORTANT: this file is PUBLIC - anyone who opens the site can read it. So it may only contain
// values that are safe to expose:
//   * the Supabase anon key        - designed to be public; the database permissions protect the data
//   * the EmailJS public key       - public by design; the recipients are fixed inside the EmailJS template
//   * the AI access key            - a shared passphrase: it limits casual use, nothing more
// Never put the Supabase service_role key, the Anthropic API key, or any email password in here.
// =====================================================================
window.JHA_CONFIG = {

  // Where JHAs are stored. Project settings -> API in the Supabase dashboard.
  // Leave both blank to run in demo mode (JHAs kept in the browser tab only).
  supabase: {
    url: "https://gkfvrzeclnoncdkhpxrz.supabase.co",        // e.g. "https://gkfvrzeclnoncdkhpxrz.supabase.co"
    anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrZnZyemVjbG5vbmNka2hweHJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI5NzQwNzIsImV4cCI6MjEwODU1MDA3Mn0.IpqrGprYkz4HNlSztG_IWnNKX8ua66ZFU1aYwE8GklU"     // the "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrZnZyemVjbG5vbmNka2hweHJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI5NzQwNzIsImV4cCI6MjEwODU1MDA3Mn0.IpqrGprYkz4HNlSztG_IWnNKX8ua66ZFU1aYwE8GklU" key - NOT the service_role key
  },

  // Emails the project team on every approval and every logged change. See GO-LIVE.md, step 3.
  // Leave blank to switch email off (the page will warn that nobody was notified).
  email: {
    serviceId: "service_6f97idb",  // e.g. "service_abc123"
    templateId: "template_e7l9kc3", // e.g. "template_xyz789"
    publicKey: "B4N8_nOaYVCZlTbdz"   // EmailJS account public key
  },

  // AI structuring of voice/typed briefings. See jha-structure/README.md.
  // Leave blank and the page falls back to a simple offline keyword matcher.
  ai: {
    url: "",        // e.g. "https://abcdxyz.supabase.co/functions/v1/jha-structure"
    key: ""         // the shared passphrase set as JHA_ACCESS_KEY on the function
  },

  // The public address of this site, used for the "Open this JHA" link in emails and as the
  // default for the QR poster tool. Include the trailing slash.
  appUrl: "https://cbup2026.github.io/SiteScribe/",       // e.g. "https://yourname.github.io/jha/"

  // The dropdown lists. The areas below are the project's; the SWMS entries are placeholders - replace them.
  // A JHA can cover several areas and then shows up under each area's QR code.
  // (Area names only need to match exactly if you also print the optional per-area QR posters.)
  // Mark an old SWMS revision status: "Superseded" so it can no longer be picked.
  lists: {
    locations: [
      "Southern Pavement Box",
      "Northern Pavement Box",
      "Abutment A",
      "Pier 1",
      "Pier 2",
      "Pier 3",
      "Pier 4",
      "Pier 5",
      "Pier 6",
      "Abutment B",
      "Span 1",
      "Span 2",
      "Span 3",
      "Span 4",
      "Span 5",
      "Span 6",
      "Span 7",
      "Sinnamon Rd Intersection",
      "Spinkbrae Civil Area"
    ],
    swms: [
      { ref: "SWMS-014", title: "Barrier Removal & Demolition", rev: "3", status: "Current" },
      { ref: "SWMS-021", title: "Piling & Foundations",         rev: "2", status: "Current" },
      { ref: "SWMS-033", title: "Traffic Management",           rev: "5", status: "Current" },
      { ref: "SWMS-045", title: "Concrete Pours",               rev: "1", status: "Current" }
    ]
  }
};
