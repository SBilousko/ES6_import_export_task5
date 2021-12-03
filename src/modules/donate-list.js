import { Settings as settings } from "../core/constants/settings";

export class DonateList {
  constructor(donates) {
    this.donates = donates;
  }

  #createElement(tagName, className = "", id = "") {
    const element = document.createElement(tagName);
    if (className) {
      element.className = className;
    }
    if (id) {
      element.id = id;
    }
    return element;
  }

  updateDonates(updatedDonates) {
    const donates = document.querySelector(".donates-container__donates");
    const donateItem = document.querySelectorAll(".donate-item");

    if (donateItem) {
      donateItem.forEach((item) => {
        item.remove();
      });
    }

    updatedDonates.forEach((donate) => {
      const donatesContainerDonates = document.querySelector(
        ".donates-container__donates"
      );
      const donateItem = this.#createElement("div", "donate-item");
      donateItem.textContent = `${donate.date} - `;
      const boldText = this.#createElement("strong");
      boldText.textContent = `${donate.amount}${settings.currency}`;
      donateItem.append(boldText);
      donatesContainerDonates.append(donateItem);
    });
  }

  render() {
    const donatesContainer = this.#createElement("div", "donates-container");

    const donatesContainerTitle = this.#createElement(
      "h2",
      "donates-container__title"
    );
    donatesContainerTitle.textContent = "Список донатов";

    const donatesContainerDonates = this.#createElement(
      "div",
      "donates-container__donates"
    );

    document.body.append(donatesContainer);
    donatesContainer.append(donatesContainerTitle, donatesContainerDonates);

    this.donates.forEach((donate) => {
      const donateItem = this.#createElement("div", "donate-item");
      donateItem.textContent = `${donate.date} - `;
      const boldText = this.#createElement("strong");
      boldText.textContent = `${donate.amount}${settings.currency}`;
      donateItem.append(boldText);
      donatesContainerDonates.append(donateItem);
    });
  }
}
