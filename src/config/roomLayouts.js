/* Room Layouts, for container specifications and mapping */
import iceRoomV1_bg from '../assets/rooms/iceRoomV1_bg.jpeg';
import hallway from '../assets/rooms/hallway.jpeg'; 
import { iceRoomV1_pathData } from '../assets/iceRoomV1_paths';


export const roomLayouts = {
    /* Morgue Freezer Room - 4 Views */
    tableWall: {
        background: '',
        containers: ['bodyBag', 'propertyBag', 'medicalChart'],
        positions: {
            bodyBag: { top: '', left: '' },
            propertyBag: { top: '', left: '' },
            medicalChart: { top: '', left: '' },  
        },
    }, 
    freezerWall: {
        background: iceRoomV1_bg, 
        containers: ['freezer1', 'freezer2', 'freezer3', 'freezer4'],
        positions: {
            freezer1: { x: 788, y: 675 },
            freezer2: { x: 600, y: 675 },
            freezer3: { x: 600, y: 860 },
            freezer4: { x: 788, y: 860 },
        },
    },
    drainWall: {
        background: '',
        containers: ['drain', 'fireExitMap'], 
        positions: {
            drain: { top: '', left: '' },
            fireExitMap: { top: '', left: '' },
        },
    },
    exitWall: {
        background: '', 
        containers: ['cabinet', 'cardReader'], 
        positions: {
            cabinet: { top: '', left: '' },
            cardReader: { top: '', left: '' },
        },
    },
    /* Hallway - 1 Views */
    blockedExit: {
        background: hallway, 
        containers: ['blockedExit', 'fireExtinguisherCase'],
        positions: {
            blockedExit: { top: '', left: '' },
            fireExtinguisherCase: { top: '', left: '' },
        },
    },
    /* Office */
    desk: {
        background: '', 
        containers: ['computer', 'desk'], // Should change 'desk' to 'drawer' 
        positions: {
            computer: { top: '', left: '' },
            desk: { top: '', left: '' }, // again, desk to drawer
        },
    },
    officeExit: {
        background: '', 
        containers: ['safe'], 
        postitions: {
            safe: { top: '', left: '' },
        },
    },
    /* Elevator */
    elevatorOut: {
        background: '', 
        containers: ['elevatorDoors', 'elevatorButton'], 
        positions: {
            elevatorDoors: { top: '', left: '' },
            elevatorButton: { top: '', left: '' },
        },
    },
    elevatorIn: {
        background: '', 
        containers: ['elevatorPanel'],
        positions: {
            elevatorPanel: { top: '', left: '' },
        },
    },
};

