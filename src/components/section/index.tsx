import React from 'react';
import { Content } from './styles';
import { useTheme } from '../../context/ThemeContext';

interface SectionProps {
    children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ children }) => {
    const { theme } = useTheme();
    
    return (
        <Content style={{ color: theme.color, background: theme.background }}>
            {children}
        </Content>
    )
}