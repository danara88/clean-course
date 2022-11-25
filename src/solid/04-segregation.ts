/**
 *
 * Interface Segregation Principle (ISP)
 * Los clientes no deben estar obligados a depender de interfaces
 * que no utilicen.
 *
 */

interface Bird {
  eat(): void;
}

interface FlyingBird {
  fly(): void;
}

interface SwimmerBird {
  swim(): void;
}

interface RunningBird {
  run(): void;
}

class Tucan implements Bird, FlyingBird {
  public fly() {}
  public eat() {}
}

class HuminBird implements Bird, FlyingBird {
  public fly() {}
  public eat() {}
}

class Ostrich implements Bird, RunningBird {
  public eat() {}
  public run() {}
}

class Pinguin implements Bird, SwimmerBird {
  public eat() {}
  public swim() {}
}
