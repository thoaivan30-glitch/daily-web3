import { Mission } from '../models/our-mission.types';
import missionData from '../mocks/our-mission.mock.json';

export const getMissions = (): Mission[] => {
  return missionData.missions;
};
