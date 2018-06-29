export interface AnimationUpdateBlock {
    animationId: number;
    delay: number;
}

export interface DamageUpdateBlock {
    damageAmount: number;
    damageType: number;

    currentHealth: number;
    maxHealth: number;
}

export interface GraphicsUpdateBlock {
    graphicId: number;
    delay: number;
}

export interface InteractingEntityUpdateBlock {
    entityId: number;
}

export interface ForceTextUpdateBlock {
    message: string;
}

export interface FacingCoordinateUpdateBlock {
    x: number;
    y: number;
}
