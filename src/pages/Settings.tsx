
import React from 'react';

const Settings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">설정</h1>
        <p className="text-muted-foreground">계정 및 앱 설정을 관리하세요</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-6 shadow-sm">
          <h3 className="text-lg font-medium mb-4">계정 설정</h3>
          <p className="text-muted-foreground mb-4">프로필, 알림 및 보안 설정을 관리합니다.</p>
          <button className="text-sm font-medium text-blue-600 hover:underline">
            업데이트 하기
          </button>
        </div>
        
        <div className="rounded-lg border p-6 shadow-sm">
          <h3 className="text-lg font-medium mb-4">앱 기본 설정</h3>
          <p className="text-muted-foreground mb-4">테마, 언어 및 기타 앱 기본 설정을 변경합니다.</p>
          <button className="text-sm font-medium text-blue-600 hover:underline">
            변경 하기
          </button>
        </div>
        
        <div className="rounded-lg border p-6 shadow-sm">
          <h3 className="text-lg font-medium mb-4">알림 설정</h3>
          <p className="text-muted-foreground mb-4">이메일, 푸시 및 인앱 알림 설정을 구성합니다.</p>
          <button className="text-sm font-medium text-blue-600 hover:underline">
            알림 관리
          </button>
        </div>
        
        <div className="rounded-lg border p-6 shadow-sm">
          <h3 className="text-lg font-medium mb-4">데이터 및 개인정보</h3>
          <p className="text-muted-foreground mb-4">개인정보 설정 및 데이터 관리를 구성합니다.</p>
          <button className="text-sm font-medium text-blue-600 hover:underline">
            개인정보 설정
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
