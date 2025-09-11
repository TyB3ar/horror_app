/* Room Layouts, for container specifications and mapping */
import iceRoomV1_bg from '../assets/iceRoomV1_bg.jpeg';

export const roomLayouts = {
    /* Morgue Freezer Room - 2 Views */
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
            freezer1: { top: '50%', left: '37%' },
            freezer2: { top: '50%', left: '49%' },
            freezer3: { top: '64%', left: '37%' }, 
            freezer4: { top: '64%', left: '49%' },
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
    /* Hallway - 3 Views */
    elevatorEntryView: {
        background: '',
        containers: [],
        positions: {
            container: { top: '', left: '' },
        },
    },
    officeEntry: {
        background: '',
        containers: ['fireExtinguisherCase'],
        positions: {
            fireExtinguisherCase: { top: '', left: '' },
        },
    },
    blockedExitView: {
        background: '', 
        containers: ['blockedExit'],
        positions: {
            blockedExit: { top: '', left: '' },
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

