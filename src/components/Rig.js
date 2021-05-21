import React from 'react'

export default function Rig(props) {
    const { artist, guitar, amplifier, effects } = props;
    return (
        <div>
            <h6>Artist: {artist}</h6>
            <h6>Guitar: {guitar}</h6>
            <h6>Amplifier: {amplifier}</h6>
            <h6> Effects:
                {
                    Object.entries(effects).map((effect) => {
                        return ` ${effect[0]}: ${effect[1]}`
                    })
                }
            </h6>
            🤘🤘🤘
        </div>
    )
}
