export interface Stats {
  hp?: number; //hit points
  sp?: number; //skill points used to use special abilities
  atk?: number; //attack increases damage dealt from physical attacks
  def?: number; //defense reduces damage from physical attacks
  int?: number; //intelligence increases damage dealt and reduces damage taken from magic attack
  spd?: number; //speed effects turn order positioning
  abi?: number; //0-200 sets the amount of trained stats the digimon can have
  cam?: number; //0-100% helps with combo rate
}
