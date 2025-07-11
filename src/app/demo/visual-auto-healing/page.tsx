'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function VisualAutoHealingDemo() {
  const [currentTheme, setCurrentTheme] = useState('light');
  const [imageVariant, setImageVariant] = useState('default');
  const [textColor, setTextColor] = useState('#000000');
  const [buttonStyle, setButtonStyle] = useState('primary');
  const [layoutType, setLayoutType] = useState('grid');

  const themes = ['light', 'dark', 'colorful'];
  const images = ['default', 'variant1', 'variant2'];
  const colors = ['#000000', '#ff6b6b', '#4ecdc4', '#45b7d1'];
  const buttonStyles = ['primary', 'secondary', 'success', 'warning'];
  const layouts = ['grid', 'flex', 'stack'];

  const changeTheme = () => {
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setCurrentTheme(themes[nextIndex]);
  };

  const changeImage = () => {
    const currentIndex = images.indexOf(imageVariant);
    const nextIndex = (currentIndex + 1) % images.length;
    setImageVariant(images[nextIndex]);
  };

  const changeTextColor = () => {
    const currentIndex = colors.indexOf(textColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    setTextColor(colors[nextIndex]);
  };

  const changeButtonStyle = () => {
    const currentIndex = buttonStyles.indexOf(buttonStyle);
    const nextIndex = (currentIndex + 1) % buttonStyles.length;
    setButtonStyle(buttonStyles[nextIndex]);
  };

  const changeLayout = () => {
    const currentIndex = layouts.indexOf(layoutType);
    const nextIndex = (currentIndex + 1) % layouts.length;
    setLayoutType(layouts[nextIndex]);
  };

  const getThemeStyles = (): React.CSSProperties => {
    switch (currentTheme) {
      case 'dark':
        return {
          backgroundColor: '#1f2937',
          color: 'white',
          border: '4px solid #374151'
        };
      case 'colorful':
        return {
          background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
          color: 'white',
          border: '4px solid #c084fc'
        };
      default:
        return {
          backgroundColor: 'white',
          color: '#1f2937',
          border: '4px solid #d1d5db'
        };
    }
  };

  const getButtonStyles = (): React.CSSProperties => {
    switch (buttonStyle) {
      case 'secondary':
        return { backgroundColor: '#6b7280', color: 'white' };
      case 'success':
        return { backgroundColor: '#059669', color: 'white' };
      case 'warning':
        return { backgroundColor: '#d97706', color: 'white' };
      default:
        return { backgroundColor: '#2563eb', color: 'white' };
    }
  };

  const getImageStyles = (): React.CSSProperties => {
    switch (imageVariant) {
      case 'variant1':
        return { backgroundColor: '#fecaca', fontSize: '48px' };
      case 'variant2':
        return { backgroundColor: '#bbf7d0', fontSize: '48px' };
      default:
        return { backgroundColor: '#bfdbfe', fontSize: '48px' };
    }
  };

  const getLayoutStyles = (): React.CSSProperties => {
    switch (layoutType) {
      case 'flex':
        return {
          display: 'flex',
          gap: '32px',
          alignItems: 'center',
          flexDirection: 'row'
        };
      case 'stack':
        return {
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          alignItems: 'flex-start'
        };
      default: // 'grid'
        return {
          display: 'grid',
          gridTemplateColumns: '220px 1fr',
          gap: '32px',
          alignItems: 'center'
        };
    }
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
      <div style={{ marginBottom: '24px' }}>
        <Link 
          href="/products" 
          style={{ color: '#2563eb', textDecoration: 'underline' }}
        >
          ← 製品一覧に戻る
        </Link>
      </div>
      
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '24px' }}>
        生成AI自動修復デモ
      </h1>
      
      <div style={{ 
        backgroundColor: '#dbeafe', 
        border: '1px solid #3b82f6', 
        borderRadius: '8px', 
        padding: '16px', 
        marginBottom: '24px' 
      }}>
        <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
          🤖 このデモについて
        </h2>
        <p style={{ fontSize: '14px', color: '#374151' }}>
          この画面は、レイアウト、テーマ、色、画像が動的に変化します。
          mablの生成AI自動修復機能は、ビジュアル比較を用いて要素を特定し続けます。
        </p>
      </div>

      <div>
        <div 
          style={{
            ...getThemeStyles(),
            borderRadius: '8px',
            padding: '32px',
            marginBottom: '24px',
            transition: 'all 0.5s ease',
            minHeight: '400px'
          }}
          data-testid="visual-target"
        >
          <div style={getLayoutStyles()}>
            <div>
              <div 
                style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '8px',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  ...getImageStyles()
                }}
                data-testid="product-image"
              >
                <span>
                  {imageVariant === 'variant1' ? '🔴' : 
                   imageVariant === 'variant2' ? '🟢' : '🔵'}
                </span>
              </div>
            </div>
            
            <div>
              <h3 
                style={{ 
                  fontSize: '24px', 
                  fontWeight: 'bold', 
                  marginBottom: '16px',
                  color: textColor
                }}
                data-testid="product-title"
              >
                デモ製品名
              </h3>
              <p style={{ marginBottom: '24px', opacity: 0.8 }}>
                この製品は、ビジュアル自動修復のテスト用です。
                レイアウトやスタイルが変化しても、AIが要素を認識します。
              </p>
              <button 
                style={{
                  padding: '12px 24px',
                  borderRadius: '6px',
                  border: 'none',
                  fontWeight: '500',
                  cursor: 'pointer',
                  ...getButtonStyles()
                }}
                data-testid="purchase-btn"
              >
                購入する
              </button>
            </div>
          </div>
        </div>

        <div style={{ 
          backgroundColor: '#f9fafb', 
          borderRadius: '8px', 
          padding: '24px' 
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
            コントロール
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '16px' 
          }}>
            <button 
              onClick={changeTheme}
              style={{
                padding: '8px 16px',
                backgroundColor: '#7c3aed',
                color: 'white',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer'
              }}
              data-testid="change-theme-btn"
            >
              テーマ変更
            </button>
            <button 
              onClick={changeImage}
              style={{
                padding: '8px 16px',
                backgroundColor: '#ea580c',
                color: 'white',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer'
              }}
              data-testid="change-image-btn"
            >
              画像変更
            </button>
            <button 
              onClick={changeTextColor}
              style={{
                padding: '8px 16px',
                backgroundColor: '#db2777',
                color: 'white',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer'
              }}
              data-testid="change-text-color-btn"
            >
              文字色変更
            </button>
            <button 
              onClick={changeButtonStyle}
              style={{
                padding: '8px 16px',
                backgroundColor: '#4f46e5',
                color: 'white',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer'
              }}
              data-testid="change-button-style-btn"
            >
              ボタンスタイル変更
            </button>
            <button 
              onClick={changeLayout}
              style={{
                padding: '8px 16px',
                backgroundColor: '#0d9488',
                color: 'white',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer'
              }}
              data-testid="change-layout-btn"
            >
              レイアウト変更
            </button>
          </div>
        </div>

        <div style={{ 
          marginTop: '24px', 
          padding: '16px', 
          backgroundColor: '#f3f4f6', 
          borderRadius: '6px' 
        }}>
          <h3 style={{ fontWeight: '500', marginBottom: '8px' }}>現在の状態:</h3>
          <div style={{ fontSize: '14px', color: '#6b7280' }}>
            <p>テーマ: {currentTheme}</p>
            <p>画像バリエーション: {imageVariant}</p>
            <p>文字色: {textColor}</p>
            <p>ボタンスタイル: {buttonStyle}</p>
            <p>レイアウト: {layoutType}</p>
          </div>
        </div>
      </div>
    </div>
  );
}