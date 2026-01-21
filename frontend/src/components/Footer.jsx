import React from "react";

const Footer = ({ completedTaskCount = 0, activeTaskCount = 0 }) => {
  return (
    <>
      {completedTaskCount + activeTaskCount > 0 && (
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {completedTaskCount > 0 && (
              <>
                😎🥰🎉🎉🎊 Tuyệt vời bạn đã hoàn thành {completedTaskCount} việc
                {activeTaskCount > 0 &&
                  `, còn ${activeTaskCount} việc nữa thôi. Gan ba ro 🤩🤩`}
              </>
            )}
            {completedTaskCount === 0 && activeTaskCount > 0 && (
              <>
                Hãy bắt đầu làm {activeTaskCount}, nhiệm vụ nào cũng phải phải
                gì phải chịu.🤷‍♀️
              </>
            )}
          </p>
        </div>
      )}
    </>
  );
};

export default Footer;
