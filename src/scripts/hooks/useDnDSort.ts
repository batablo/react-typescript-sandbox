import React, { useRef, useState } from 'react';

// 座標の型
interface Position {
  x: number;
  y: number;
}

// ドラッグ＆ドロップ要素の情報をまとめた型
interface DnDItem<T> {
  value: T; // useDnDSort()の引数に渡された配列の要素の値
  key: string; // 要素と紐づいた一意な文字列
  position: Position; // 要素の座標
  element: HTMLElement; // DOM情報
}

// useRef()で保持するデータの型
interface DnDRef<T> {
  keys: Map<T, string>; // 要素に紐づいたkey文字列を管理するMap
  dndItems: DnDItem<T>[]; // 並び替える全ての要素を保持するための配列
  canCheckHovered: boolean; // 重なり判定ができるかのフラグ
  pointerPosition: Position; // マウスポインターの座標
  dragElement: DnDItem<T> | null; // ドラッグしてる要素
}

// hookの返り値の型
interface DnDSortResult<T> {
  key: string;
  value: T;
  events: {
    ref: (element: HTMLElement | null) => void;
    onMouseDown: (event: React.MouseEvent<HTMLElement>) => void;
  };
}

export const useDnDSort = <T>(defaultItems: T[]): DnDSortResult<T>[] => {
  // 描画内容と紐づいているのでuseStateで管理する
  const [items] = useState(defaultItems);
  // const [items, setItems] = useState(defaultItems);

  // 状態をrefで管理する
  const state = useRef<DnDRef<T>>({
    keys: new Map<T, string>(),
    dndItems: [],
    canCheckHovered: true,
    pointerPosition: { x: 0, y: 0 },
    dragElement: null,
  }).current;

  // ドラッグ中の処理
  const onMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    const { dragElement, pointerPosition } = state;

    // ドラッグしてなければ何もしない
    if (!dragElement) return;

    // マウスポインターの移動量を計算
    const x = clientX - pointerPosition.x;
    const y = clientY - pointerPosition.y;

    const dragStyle = dragElement.element.style;

    // ドラッグ要素の座標とスタイルを更新
    dragStyle.zIndex = '100';
    dragStyle.cursor = 'grabbling';
    dragStyle.transform = `translate(${x}px, ${y}px)`;
  };

  // ドラッグが終了した時の処理
  const onMouseUp = (_: MouseEvent) => {
    const { dragElement } = state;

    if (!dragElement) return;

    const dragStyle = dragElement.element.style;

    // ドラッグしている要素に適用していたCSSを削除
    dragStyle.zIndex = '';
    dragStyle.cursor = '';
    dragStyle.transform = '';

    // ドラッグしている要素をstateから削除
    state.dragElement = null;

    // windowに登録していたイベントを削除
    window.removeEventListener('mouseup', onMouseUp);
    window.removeEventListener('mousemove', onMouseMove);
  };

  return items.map(
    (value: T): DnDSortResult<T> => {
      // keyが無ければ新しく作り、あれば既存のkey文字列を返す
      const key = state.keys.get(value) || Math.random().toString(16);

      // 生成したkey文字列を保存
      state.keys.set(value, key);

      return {
        value,
        key, // ref.keys内の値を参照するように修正
        events: {
          ref: () => void 0,
          onMouseDown: (event: React.MouseEvent<HTMLElement>) => {
            // ドラッグする要素(DOM)
            const element = event.currentTarget;

            // マウスポインターの座標を保持しておく
            state.pointerPosition.x = event.clientX;
            state.pointerPosition.y = event.clientY;

            // ドラッグしている要素のスタイルを上書き
            element.style.transition = ''; // アニメーションを無効にする
            element.style.cursor = 'grabbing'; // カーソルのデザインを変更

            // 要素の座標を取得
            const { left: x, top: y } = element.getBoundingClientRect();
            const position: Position = { x, y };

            // ドラッグする要素を保持しておく
            state.dragElement = { key, value, element, position };

            // mousemove, mouseupイベントをwindowに登録する
            window.addEventListener('mouseup', onMouseUp);
            window.addEventListener('mousemove', onMouseMove);
          },
        },
      };
    },
  );
};
