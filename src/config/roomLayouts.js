/* Room Layouts, for container specifications and mapping */
import iceRoomV1_bg from '../assets/rooms/iceRoomV1_bg.jpeg';
import hallway from '../assets/rooms/hallway.jpeg'; 
import { iceRoomV1_pathData } from '../assets/iceRoomV1_paths';
import { iceRoomV1_colorMap } from '../assets/iceRoomV1_colorMap';


export const roomLayouts = {
    /* Morgue Freezer Room - 4 Views */
    freezerWall: {
        background: iceRoomV1_bg, 
        pathData: iceRoomV1_pathData,
        colorMap: iceRoomV1_colorMap,
        containers: ['freezer1', 'freezer2', 'freezer3', 'freezer4'],
        positions: {
            freezer1: { x: 788, y: 675 },
            freezer2: { x: 600, y: 675 },
            freezer3: { x: 600, y: 860 },
            freezer4: { x: 788, y: 860 },
        },
        links: {
            left: '/page2', /* Table Wall  */
            right: '/page3' /* Drain Wall */
        }
    },
    tableWall: {
        background: '',
        containers: ['bodyBag', 'propertyBag', 'medicalChart'],
        positions: {
            bodyBag: { top: '', left: '' },
            propertyBag: { top: '', left: '' },
            medicalChart: { top: '', left: '' },  
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

