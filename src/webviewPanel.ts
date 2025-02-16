import * as vscode from "vscode";

export function createNewOutputPanelView(context: vscode.ExtensionContext) {
  const panel = vscode.window.createWebviewPanel(
    "multiViewOutput",
    "Output Panel View",
    vscode.ViewColumn.One,
    {
      enableScripts: true,
      retainContextWhenHidden: true,
    }
  );

  panel.webview.html = getWebviewContent();

  panel.onDidDispose(
    () => {
      console.log("Webview panel disposed");
    },
    null,
    context.subscriptions
  );
}

function getWebviewContent(): string {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Output Panel View</title>
    </head>
    <body>
        <h1>Output Panel View</h1>
        <p>Channel Selector will go here...</p>
        <div id="output-content">
            </div>
    </body>
    </html>`;
}
