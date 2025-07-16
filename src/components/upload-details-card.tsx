export function UploadDetailsCard() {
  return (
    <div className="bg-background-teal p-8 rounded-xl border border-border-accent shadow-lg max-w-md mx-auto">
      <h2 className="text-text-accent text-xl font-bold mb-6 text-center">
        PLEASE UPLOAD IMAGE AND DETAILS
      </h2>

      <div className="mb-6">
        <p className="text-foreground text-sm mb-2">
          Upload JPG & PNG Format Image (Max size: 3MB)
        </p>
        <div className="flex items-center space-x-2">
          <label className="cursor-pointer bg-background-dark text-text-light px-4 py-2 border border-border-accent hover:bg-background-dark/80 rounded text-sm font-medium">
            Browse...
            <input
              type="file"
              accept="image/png, image/jpeg"
              className="hidden"
         onChange={(e) => {
  const input = e.target as HTMLInputElement;
  const file = input.files?.[0];

  const fileNameInput = document.getElementById("file-name") as HTMLInputElement | null;

  if (file && fileNameInput) {
    fileNameInput.value = file.name;
  }
}}

            />
          </label>
          <input
            id="file-name"
            type="text"
            readOnly
            placeholder="No file selected."
            className="flex-1 bg-background-dark text-text-light border border-border-accent placeholder:text-muted-foreground px-3 py-2 rounded text-sm"
          />
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <input
          type="text"
          placeholder="1st: enter your name"
          className="w-full bg-white text-black border border-border-accent placeholder:text-muted-foreground px-3 py-2 rounded"
        />
        <input
          type="text"
          placeholder="2nd: enter your designation"
          className="w-full bg-white text-black border border-border-accent placeholder:text-muted-foreground px-3 py-2 rounded"
        />
        <input
          type="text"
          placeholder="3rd: enter your company"
          className="w-full bg-white text-black border border-border-accent placeholder:text-muted-foreground px-3 py-2 rounded"
        />
      </div>

      <button
        className="w-full py-3 text-lg font-bold text-foreground relative overflow-hidden
                   bg-button-generate-bg border border-border-accent rounded
                   before:content-[''] before:absolute before:inset-0 before:bg-[url('/placeholder.svg?height=20&width=20')] before:bg-repeat before:opacity-20
                   hover:bg-button-generate-bg/80 transition-colors"
      >
        GENERATE
      </button>

      <div className="mt-10 text-center">
        <h3 className="text-text-accent text-lg font-bold mb-4">Share Your ETEX 2025 Badge</h3>
        <p className="text-foreground text-sm mb-4">
          Once your badge is ready, you are encouraged to post it on LinkedIn, Twitter, or Facebook using the suggested
          caption in this window:
        </p>
        <p className="text-foreground text-sm font-bold mb-4">Please tag the official pages when sharing:</p>
        <ul className="text-foreground text-sm list-disc list-inside space-y-1 text-left inline-block">
          <li>LinkedIn: @etex2025</li>
          <li>Twitter: @etex_ethiopia</li>
          <li>Facebook: @etex</li>
        </ul>
      </div>
    </div>
  );
}
