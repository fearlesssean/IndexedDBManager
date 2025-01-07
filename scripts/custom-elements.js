class Footer extends HTMLElement {
    constructor() {
        super(); // Call the parent constructor
    }

    connectedCallback() {
        this.render();
    }

    async render() {
        try {
            const response = await fetch('templates/footer.html');
            if (!response.ok) throw new Error('Failed to load footer');
            const html = await response.text();
            
            // Inject footer content into the custom element
            this.innerHTML = html

        } catch (error) {
            console.error('Error rendering footer:', error);
            this.innerHTML = `<p style="color: red;">Failed to load footer.</p>`;
        }
    }
}

class Header extends HTMLElement {
    constructor() {
        super(); // Call the parent constructor
    }
    
    connectedCallback() {
        this.render();
    }
    
    async render() {
        try {
            const response = await fetch('templates/header.html');
            if (!response.ok) throw new Error('Failed to load header');
            const html = await response.text();
            const title = this.getAttribute('title') || 'Default Title';
            
            // Inject header content into the custom element
            this.innerHTML = html.replace('{{title}}', title);
            
        } catch (error) {
            console.error('Error rendering header:', error);
            this.innerHTML = `<p style="color: red;">Failed to load header.</p>`;
        }
    }
}

// Wait for doc to load before commands
document.addEventListener('DOMContentLoaded', async function () {
    try {
        // Then get the data
        customElements.define('ce-footer', Footer);
        customElements.define('ce-header', Header);
    } catch (error) {
        console.error("Error during initialization:", error);
    }
});

