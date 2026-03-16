import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Eb's Assistant Chat Bubble Widget
(function() {
  const config = {
    agentId: '5a0a748a-39c3-45bf-bd60-02de74a071ea',
    widgetUrl: 'https://dala.gebeya.com/agents/5a0a748a-39c3-45bf-bd60-02de74a071ea/embed?primaryColor=%23ff5c00&secondaryColor=%23ff0099&greeting=Hi%21+How+can+I+help+you+today%3F&hideHeader=false&agentName=Eb%27s+Assistant',
    primaryColor: '#ff5c00',
    position: 'bottom-right' as const,
    agentName: "Eb's Assistant"
  };
  
  const button = document.createElement('div');
  button.id = 'ai-chat-bubble';
  button.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>';
  
  const positionStyles: Record<string, string> = {
    'bottom-right': 'bottom: 20px; right: 20px;',
    'bottom-left': 'bottom: 20px; left: 20px;',
    'top-right': 'top: 20px; right: 20px;',
    'top-left': 'top: 20px; left: 20px;'
  };
  
  button.style.cssText = 'position: fixed; ' + positionStyles[config.position] + 
    ' width: 60px; height: 60px; border-radius: 50%; background: ' + config.primaryColor + 
    '; box-shadow: 0 4px 12px rgba(0,0,0,0.15); cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 9999; transition: transform 0.2s, box-shadow 0.2s;';
  
  button.onmouseover = function() {
    button.style.transform = 'scale(1.1)';
    button.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)';
  };
  
  button.onmouseout = function() {
    button.style.transform = 'scale(1)';
    button.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
  };
  
  const chatWindow = document.createElement('div');
  chatWindow.id = 'ai-chat-window';
  chatWindow.style.cssText = 'position: fixed; ' + positionStyles[config.position] + 
    ' width: 400px; height: 600px; border-radius: 12px; box-shadow: 0 8px 40px rgba(0,0,0,0.2); z-index: 10000; display: none; background: white; overflow: hidden;';
  
  const iframe = document.createElement('iframe');
  iframe.src = config.widgetUrl;
  iframe.style.cssText = 'width: 100%; height: 100%; border: none; border-radius: 12px;';
  chatWindow.appendChild(iframe);
  
  let isOpen = false;
  button.onclick = function() {
    isOpen = !isOpen;
    chatWindow.style.display = isOpen ? 'block' : 'none';
    button.style.display = isOpen ? 'none' : 'flex';
  };
  
  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '×';
  closeBtn.style.cssText = 'position: absolute; top: 10px; right: 10px; width: 30px; height: 30px; border-radius: 50%; background: rgba(0,0,0,0.5); color: white; border: none; cursor: pointer; font-size: 24px; line-height: 1; z-index: 10001; display: none;';
  closeBtn.onclick = function() {
    chatWindow.style.display = 'none';
    button.style.display = 'flex';
    isOpen = false;
  };
  
  chatWindow.onmouseover = function() { closeBtn.style.display = 'flex'; };
  chatWindow.onmouseout = function() { closeBtn.style.display = 'none'; };
  
  chatWindow.appendChild(closeBtn);
  document.body.appendChild(button);
  document.body.appendChild(chatWindow);
})();