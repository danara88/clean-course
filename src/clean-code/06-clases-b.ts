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

  /**
   * Person
   */
  interface PersonProps {
    name: string;
    gender: Gender;
    birthday: Date;
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthday: Date;

    constructor({ name, gender, birthday }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthday = birthday;
    }
  }

  /**
   * User
   */
  interface UserProps {
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthday: Date;
  }

  class User extends Person {
    public email: string;
    public role: string;
    public lastAccess: Date;

    constructor({ email, role, name, gender, birthday }: UserProps) {
      super({ name, gender, birthday });
      this.lastAccess = new Date();
      this.role = role;
      this.email = email;
    }

    checkCredentials() {
      return true;
    }
  }

  /**
   * User Settings
   */
  interface UserSettingsProps {
    workingDir: string;
    lastOpenFolder: string;
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthday: Date;
  }

  class UserSettings extends User {
    public workingDir: string;
    public lastOpenFolder: string;

    constructor({
      workingDir,
      lastOpenFolder,
      email,
      role,
      name,
      gender,
      birthday,
    }: UserSettingsProps) {
      super({ email, role, name, gender, birthday });
      this.workingDir = workingDir;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const userSettings = new UserSettings({
    workingDir: "/usr/home",
    lastOpenFolder: "/usr/home",
    email: "daniel@gmail.com",
    role: "Admin",
    name: "Daniel",
    gender: "M",
    birthday: new Date("2000-03-03"),
  });

  console.log({
    userSettings,
    areCredentialsValid: userSettings.checkCredentials(),
  });
})();
