(() => {
  /**
   * Aplicando la Responsabilidad única.
   * PRIORIZAR LA COMPOSICIÓN FRENTE A LA HERENCIA.
   * En pocas palabras evitar la herencia (extends) ya que añaden una capa de compelidad al momento de leer.
   */

  type Gender = "M" | "F";

  /**
   * Person
   * Esta si aplica el principio.
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
  }

  class User {
    public email: string;
    public role: string;
    public lastAccess: Date;

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date();
      this.role = role;
      this.email = email;
    }

    checkCredentials() {
      return true;
    }
  }

  /**
   * Settings
   */
  interface SettingsProps {
    workingDir: string;
    lastOpenFolder: string;
  }

  class Settings {
    public workingDir: string;
    public lastOpenFolder: string;

    constructor({ workingDir, lastOpenFolder }: SettingsProps) {
      this.workingDir = workingDir;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  interface UserSettingsProps {
    workingDir: string;
    lastOpenFolder: string;
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthday: Date;
  }

  // Composición de mis otras clases
  // Mucho mas facil de leer que usando herencia
  // Mantener aislada las cosas
  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      name,
      gender,
      birthday,
      email,
      role,
      workingDir,
      lastOpenFolder,
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthday });
      this.user = new User({ email, role });
      this.settings = new Settings({ workingDir, lastOpenFolder });
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
    areCredentialsValid: userSettings.user.checkCredentials(),
  });
})();
