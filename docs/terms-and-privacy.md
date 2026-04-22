# Terms of Service and Privacy Policy

Last updated: April 22, 2026

---

## 1. Terms of Service

### 1.1 Acceptance of Terms

By installing or using Poppy ("the Extension," "we," "us," or "our"), you agree to these Terms of Service. If you do not agree, do not install or use the Extension.

### 1.2 Description of Service

Poppy is a browser automation extension that records user interactions (clicks, typing, scrolling, tab navigation) within the browser and allows users to replay, export, and import those recordings locally. All processing occurs client-side on your device.

### 1.3 License

Poppy is released under the MIT License. You are free to use, modify, and distribute the software in accordance with the terms of that license.

### 1.4 Acceptable Use

You agree not to use Poppy to:

- Record, replay, or automate actions on websites where doing so violates those websites' Terms of Service.
- Engage in any unlawful activity, including fraud, unauthorized access, or data scraping in violation of applicable law.
- Distribute malicious recordings designed to harm other users' systems or data.
- Circumvent security measures, CAPTCHAs, or other anti-automation protections.

You are solely responsible for ensuring your use of Poppy complies with the policies of any website you interact with.

### 1.5 Disclaimer of Warranties

Poppy is provided "as is" without warranties of any kind, express or implied. We do not guarantee that the Extension will be error-free, secure, or compatible with all websites. Use at your own risk.

### 1.6 Limitation of Liability

To the fullest extent permitted by law, we shall not be liable for any damages arising out of or related to your use of Poppy, including but not limited to data loss, website account suspension, or financial loss.

### 1.7 Termination

You may stop using Poppy at any time by removing the Extension from your browser. We reserve the right to discontinue the project or restrict access to updates at any time.

---

## 2. Privacy Policy

### 2.1 Overview

Poppy is designed with privacy as a core principle. We believe your browsing data belongs to you and no one else.

### 2.2 Data Collection

**Poppy does not collect, transmit, or store any of your data on external servers.**

The Extension operates entirely within your browser. The only data it handles is:

- **Recording Data:** When you actively choose to record a workflow, Poppy captures a structured representation of your actions (element targets, input values, navigation URLs, tab events). This data is stored locally in your browser's IndexedDB.
- **Extension Settings:** Your LLM configuration (base URL, model, API key) and preferences are stored in `chrome.storage.local`.

### 2.3 No Telemetry or Analytics

Poppy does not include telemetry, analytics, crash reporting, or any mechanism that sends data to third parties. We do not know who uses the Extension, how often it is used, or what websites it is used on.

### 2.4 Local Storage Only

All recordings, settings, and session history are stored exclusively on your device. They never leave your browser unless you explicitly choose to:

- **Export a recording:** This creates a `.poppyrecipe` file on your local machine. The file is encrypted using AES-GCM so it is not human-readable. You may share this file with others at your discretion.
- **Configure an LLM endpoint:** If you provide an API key and endpoint for the AI agent feature, requests are sent directly from your browser to your chosen provider. We do not proxy, log, or intercept these requests.

### 2.5 Permissions

Poppy requests the following browser permissions:

- `tabs` and `tabGroups` — to manage tab lifecycle during recording and replay.
- `sidePanel` — to display the Extension UI.
- `storage` — to persist settings locally.
- `<all_urls>` — to inject the content script required for recording and replay on any website.

These permissions are used solely for the Extension's core functionality. We do not use them to access, read, or transmit data beyond what is necessary for recording and replay.

### 2.6 Third-Party Services

Poppy does not integrate with third-party services for data collection. The only external communication occurs when:

- You configure a custom LLM endpoint for the AI agent feature. In that case, your browser communicates directly with the provider you specified.
- You visit the Poppy website or GitHub repository, which are hosted by GitHub Pages and GitHub respectively.

### 2.7 Data Retention and Deletion

Because all data is local, retention is under your control. You can delete individual recordings, clear all recordings, or uninstall the Extension to remove all stored data. Uninstalling the Extension deletes all associated IndexedDB and storage data.

### 2.8 Changes to This Policy

We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of the Extension after changes constitutes acceptance of the revised policy.

### 2.9 Contact

For questions about these terms or the Privacy Policy, please open an issue on our [GitHub repository](https://github.com/niknegi/poppy-website).

### 3.0 Dependencies

You also agree to the privacy policy of the downstream dependencies are that being consumed by poppy extension.

---

**Summary:** Poppy is a local-first, privacy-first browser extension. Your data stays on your device. We don't track you, we don't sell data, and we don't operate servers.
