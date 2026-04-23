How to answer: What is a Buffer in Node.js — Definition, APIs, and best practices
Define Buffers, show common creation methods, and highlight performance and safety considerations.

Definition:

A Buffer is a fixed-size chunk of memory for raw binary data (bytes). It is used for file I/O, network sockets, and other binary protocols.
Common creation methods:

Buffer.from('hello', 'utf8') — create from existing data.
Buffer.alloc(size) — allocate zero-filled buffer.
Buffer.allocUnsafe(size) — faster allocation without zero-fill (use carefully).
Operations and encodings:

Read/write methods: buf.readUInt8(offset), buf.writeUInt32BE(value, offset).
Encoding conversions: buf.toString('utf8'), Buffer.from(base64String, 'base64').
Slicing does not copy memory: const slice = buf.slice(0, 10) (shares underlying memory).
Performance & safety:

Prefer Buffer.alloc() when security matters (prevents leaking previous memory).
Use Buffer.allocUnsafe() for hot paths where performance matters and you immediately overwrite contents.
Why it matters in node js interview questions:

Buffers are fundamental to efficient binary processing and appear in network/file APIs. Explaining memory behavior and safe allocation highlights systems-level competence.