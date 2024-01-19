"use client";

function GlobalError({ error }: { error: Error }) {
  return (
    <>
      <div>Internal Server Error</div>
      <p>{error.message}</p>
    </>
  );
}
export default GlobalError;
