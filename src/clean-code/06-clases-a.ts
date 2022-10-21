(() => {
  // No aplica principio de responsabilidad unica
  /**
   * Las clases implementadas abajo estan violando el principio de responsabilidad unica,
   * ya que estamos heredendo de otras clases (son muchas cosas).
   * Si alguien viene a leer el código, no le quedará muy claro (complicado)
   *
   * Heredenado es casi imposible cumplir esta regla.
   */
  type Gender = "M" | "F";

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthday: Date
    ) {}
  }

  class User extends Person {
    public lastAccess: Date;
    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthday: Date
    ) {
      super(name, gender, birthday);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDir: string,
      public lastOpenFolder: string,
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthday: Date
    ) {
      super(email, role, name, gender, birthday);
    }
  }

  const userSettings = new UserSettings(
    "/usr/home",
    "/usr/home",
    "daniel@gmail.com",
    "Admin",
    "Daniel",
    "M",
    new Date("2000-03-03")
  );

  console.log({
    userSettings,
    areCredentialsValid: userSettings.checkCredentials(),
  });
})();
