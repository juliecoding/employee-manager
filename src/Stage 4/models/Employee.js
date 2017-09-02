export default class Employee {
  constructor(id, name, phone, title) {
    this.id = id, //Why aren't these in a state object?
    this.name = name,
    this.phone = phone,
    this.title = title
  }

  updateName(name) {
    this.name = name;
  }

  updatePhone(phone) {
    this.phone = phone;
  }

  updateTitle(title) {
    this.title = title;
  }
}
