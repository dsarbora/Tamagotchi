import Tamagotchi from './../src/js/tamagotchi.js';

describe('Tamagotchi', function(){
  let tamagotchi;
  beforeEach(function(){
    jasmine.clock().install();
    tamagotchi = new Tamagotchi("Bob");
    tamagotchi.needsTick();
  });
  afterEach(function(){
    jasmine.clock().uninstall();
  });
  it('Tamacrowchi can be created.', function(){
    expect(tamagotchi.name).toEqual("Bob");
    expect(tamagotchi).toEqual(jasmine.any(Tamagotchi));
  });

  it('Tamacrowchi is created with intended stats.', function(){
    expect(tamagotchi.hunger).toEqual(0);
    expect(tamagotchi.boredom).toEqual(0);
    expect(tamagotchi.tiredness).toEqual(0);
  });

  it('Tamacrowchi stats increase with time.', function(){
    jasmine.clock().tick(3001);
    expect(tamagotchi.hunger).toEqual(3);
    expect(tamagotchi.boredom).toEqual(3);
    expect(tamagotchi.tiredness).toEqual(3);
  });

  it('Tamacrowchi runs away if needs are not met.', function(){
    jasmine.clock().tick(3600001);
    expect(tamagotchi.hasRunAway()).toEqual(true);
  });

  it('Tamacrowchi hunger decreases if fed.', function(){
    jasmine.clock().tick(3001);
    tamagotchi.feed();
    expect(tamagotchi.hunger).toEqual(0);
  });

  it('Tamacrowchi boredom decreases if entertained.', function(){
    jasmine.clock().tick(6001);
    tamagotchi.entertain();
    expect(tamagotchi.boredom).toEqual(0);
  });

  it('Tamacrowchi tiredness decreases if it sleeps.', function(){
    jasmine.clock().tick(10001);
    tamagotchi.sleep();
    expect(tamagotchi.isSleeping).toEqual(true);
    expect(tamagotchi.tiredness).toEqual(0);
  });

  it('Tamagotchi wakes up from slumber.', function(){
    jasmine.clock().tick(10001);
    tamagotchi.sleep();
    tamagotchi.awaken();
    expect(tamagotchi.isSleeping).toEqual(false);
  });
});
