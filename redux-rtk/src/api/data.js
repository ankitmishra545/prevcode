import Chance from "chance";

const chance = Chance();

export const fakeUserData = () => {
    return chance.name({ middle: true });
}

export const fakeUserAvatar = () => {
    return chance.color({format: 'rgb'});
}