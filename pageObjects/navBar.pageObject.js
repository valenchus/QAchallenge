const { expect } = require('@playwright/test');

exports.NavBarPage = class NavBarPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.buttonInicio = page.locator("xpath=//button[contains(@class, 'sc-eflkNB fVEgKX')]//p[text()='Inicio']")
    this.buttonExplorar = page.locator("xpath=//button[contains(@class, 'sc-eflkNB fVEgKX')]//p[text()='Explorar']")
    this.buttonMensajes = page.locator("xpath=//button[contains(@class, 'sc-eflkNB fVEgKX')]//p[text()='Mensajes']")
    this.buttonPerfil = page.locator("xpath=//button[contains(@class, 'sc-eflkNB fVEgKX')]//p[text()='Perfil']")

    this.perfilHeading = page.locator("xpath=//div[contains(@class, 'sc-gJgZMk bJpLtg')]//div")
    this.mensajesHeading = page.locator("xpath=//div[contains(@class, 'sc-cLVjUO bPSqrW')]//div[2]")
    this.inicioHeading = page.locator("xpath=//h1[text()='Inicio']")
    this.searchInput = page.locator("xpath=//input[contains(@placeholder, 'Buscar en Twitter')]")
  }

  async clickInicio() {
    await this.buttonInicio.click();
    await expect(this.inicioHeading).toBeVisible();
  }

  async clickExplorar() {
    await this.buttonExplorar.click();
    await expect(this.searchInput).toBeVisible();
  }

  async clickMensajes() {
    await this.buttonMensajes.click();
    await expect(this.mensajesHeading).toBeVisible();
  }

  async clickPerfil() {
    await this.buttonPerfil.click();
  }

  async checkPerfilHeading(heading) {
    await expect(this.perfilHeading).toHaveText(heading);
  }
};