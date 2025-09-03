/* Room Layouts, for container specifications and mapping */

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
        background: '', 
        conatiners: ['freezer1', 'freezer2', 'freezer3', 'freezer4'],
        positions: {
            freezer1: { top: '20%', left: '10%' },
            freezer2: { top: '20%', left: '30%' },
            freezer3: { top: '20%', left: '50%' }, 
            freezer4: { top: '20%', left: '70%' },
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

