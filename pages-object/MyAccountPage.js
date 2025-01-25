import { AccountLogoutPage } from './AccountLogoutPage';
import { HomePage } from './HomePage'
export class MyAccountPage {
  constructor(page) {
    this.page = page;
    this.headerPage = "//h2[normalize-space()='My Account']";
    this.dropdownMenu = "//span[normalize-space()='My Account']";
    this.logoutLink = "//a[@class='list-group-item'][normalize-space()='Logout']";
    this.logoPage = "#logo img";
  }

  async validateHeaderPage() {
    try {
      await this.page.waitForSelector(this.headerPage, { state: "visible" });
      return await this.page.locator(this.headerPage).isVisible();
    } catch (error) {

      return false;
    }
  }
  async clickOnDropdownMenu() {
    try {
      await this.page.click(this.dropdownMenu);
    } catch (error) {
      console.log("Error while clicking on Dropdown menu", error.message);

    }
  }

  async clickOnLogoutLink() {
    try {
      await this.page.click(this.logoutLink);
      const accLogoutPage = new AccountLogoutPage(this.page);
      return accLogoutPage;
    } catch (error) {
      console.log("Error while clicking on Logout Link", error);
      return null;
    }
  }

  async clickOnLogo() {
    try {
      await this.page.click(this.logoPage);
      const hp = new HomePage(this.page);
      return hp;
    } catch (error) {
      console.log("Error while clicking on Logo", error);
      return null;
    }
  }
}